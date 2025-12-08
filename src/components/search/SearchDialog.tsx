import { useEffect, useState, useMemo } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import lunr from "lunr";
import { searchData, SearchDocument } from "../../utils/searchData";

interface SearchDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (page: string) => void;
    initialQuery?: string;
}

export function SearchDialog({ isOpen, onClose, onNavigate, initialQuery = "" }: SearchDialogProps) {
    const [query, setQuery] = useState(initialQuery);
    const [results, setResults] = useState<SearchDocument[]>([]);

    const idx = useMemo(() => {
        return lunr(function () {
            this.ref('id');
            this.field('title');
            this.field('content');
            this.field('keywords', { boost: 5 });

            searchData.forEach(doc => {
                this.add(doc);
            });
        });
    }, []);

    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        try {
            // Lunr search supports wildcards, we append * to match prefixes
            const searchTerm = query.trim() + "*"; 
            const searchResults = idx.search(searchTerm);
            
            const mappedResults = searchResults.map(r => 
                searchData.find(d => d.id === r.ref)
            ).filter((d): d is SearchDocument => !!d);
            
            setResults(mappedResults);
        } catch (e) {
            console.error(e);
            setResults([]);
        }
    }, [query, idx]);

    useEffect(() => {
        if (isOpen) {
            if (initialQuery) {
                setQuery(initialQuery);
            }
        } else {
            setQuery("");
            setResults([]);
        }
    }, [isOpen, initialQuery]);

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-xl bg-white text-black z-[60] gap-4">
                <DialogHeader>
                    <DialogTitle className="font-serif text-xl">Search</DialogTitle>
                    <DialogDescription className="sr-only">
                        Search the website for pages, exhibitions, and news.
                    </DialogDescription>
                </DialogHeader>
                
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input 
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Type to search..."
                        className="pl-9 bg-gray-50 border-gray-200 focus:border-black focus:ring-black"
                        autoFocus
                    />
                </div>

                <div className="min-h-[100px] max-h-[400px] overflow-y-auto">
                    {results.length > 0 ? (
                        <div className="flex flex-col gap-2">
                            {results.map((result) => (
                                <button
                                    key={result.id} 
                                    onClick={() => {
                                        onNavigate(result.page);
                                        onClose();
                                    }}
                                    className="w-full text-left p-3 hover:bg-gray-100 rounded-md transition-colors block group"
                                >
                                    <h3 className="font-medium text-black group-hover:text-red-600 transition-colors">
                                        {result.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 line-clamp-2 mt-1">
                                        {result.content}
                                    </p>
                                </button>
                            ))}
                        </div>
                    ) : query ? (
                         <div className="text-center py-8 text-gray-400">
                            No results found for "{query}"
                         </div>
                    ) : (
                        <div className="text-center py-8 text-gray-400 text-sm">
                            Type to search pages, exhibitions, and news.
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
