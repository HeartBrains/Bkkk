export interface ArtistDetail {
  id: number;
  slug: string;
  name: string;
  period: string; // Used for "date" in ResidencyPage
  image: string;
  category: 'current' | 'previous';
  bio: string;
  statement: string;
  gallery: string[];
}

export const ARTISTS_DATA: ArtistDetail[] = [
  {
    id: 1,
    slug: 'cole-lu',
    name: "Cole Lu",
    period: "October 2024",
    image: "https://images.unsplash.com/photo-1700896019740-50219bc94ab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBpbnN0YWxsYXRpb24lMjB3b29kZW4lMjBkb29ycyUyMGRhcmt8ZW58MXx8fHwxNzY4MTM4Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: 'previous',
    bio: "Cole Lu (b. 1984, Taipei) is an artist whose work explores the intricate relationships between history, text, and materiality. Through a practice that spans writing, sculpture, and installation, Lu examines how narratives are constructed and how they shape our understanding of the world. Her work often references classical mythology and literature, recontextualizing these sources to address contemporary issues of identity and belonging.",
    statement: "In her residency at Bangkok Kunsthalle, Lu focused on a new body of work that investigates the intersection of language and objecthood. Using burnt wood as a primary medium, she created a series of relief sculptures that function as both image and text. The process of burning, for Lu, is a way of inscribing memory and loss into the material itself. The resulting works are haunting and evocative, inviting viewers to decipher the hidden meanings embedded within the charred surfaces.",
    gallery: [
      "https://images.unsplash.com/photo-1700896019740-50219bc94ab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBpbnN0YWxsYXRpb24lMjB3b29kZW4lMjBkb29ycyUyMGRhcmt8ZW58MXx8fHwxNzY4MTM4Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1767294274527-5a73444d6b48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBpbnN0YWxsYXRpb24lMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc2ODE1MTE0NHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1641766860997-53f4b4a68d23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjBzdHVkaW8lMjBjb250ZW1wb3JhcnklMjBhcnR8ZW58MXx8fHwxNzY4MTUxMTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    id: 2,
    slug: 'nicolas-amato',
    name: "Nicolas Amato",
    period: "January–February 2025",
    image: "https://images.unsplash.com/photo-1663192070720-c0828beeb284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYmFuZG9uZWQlMjBzdGFpcmNhc2UlMjBhcnQlMjBpbnN0YWxsYXRpb24lMjB3b29kZW58ZW58MXx8fHwxNzY4MTM4Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: 'previous',
    bio: "Nicolas Amato is a French-Italian artist known for his immersive installations that manipulate light and space. His work challenges perception, creating environments that disorient and engage the viewer's sensory experience. Amato draws inspiration from architectural theory and the phenomenology of perception.",
    statement: "During his time at the residency, Amato developed a site-specific installation responding to the unique light conditions of Bangkok. He experimented with reflective materials and programmed lighting sequences to transform the gallery space into a shifting landscape of color and shadow. The work invites the audience to become active participants, as their movements and perspectives alter the visual composition of the piece.",
    gallery: [
      "https://images.unsplash.com/photo-1663192070720-c0828beeb284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYmFuZG9uZWQlMjBzdGFpcmNhc2UlMjBhcnQlMjBpbnN0YWxsYXRpb24lMjB3b29kZW58ZW58MXx8fHwxNzY4MTM4Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1767294274527-5a73444d6b48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBpbnN0YWxsYXRpb24lMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc2ODE1MTE0NHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1641766860997-53f4b4a68d23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjBzdHVkaW8lMjBjb250ZW1wb3JhcnklMjBhcnR8ZW58MXx8fHwxNzY4MTUxMTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    id: 3,
    slug: 'spencer-sweeney',
    name: "Spencer Sweeney",
    period: "July–December 2025",
    image: "https://images.unsplash.com/photo-1637761566180-9dbde4fdab77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjBpbiUyMHN0dWRpbyUyMHdvcmtpbmclMjBjb250ZW1wb3Jhcnl8ZW58MXx8fHwxNzY4MTM4Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: 'previous',
    bio: "Spencer Sweeney is a New York-based artist whose energetic and eclectic practice encompasses painting, performance, and music. A central figure in the downtown New York art scene, Sweeney's work is characterized by its raw energy, humor, and collaborative spirit. He often uses the portrait format to explore psychological states and social dynamics.",
    statement: "For his Bangkok residency, Sweeney set up an open studio, collaborating with local musicians and performers. His project focused on the chaos and vibrancy of the city, translating its rhythm into a series of large-scale paintings. The works are chaotic and colorful, layering abstraction with figuration to capture the pulse of urban life.",
    gallery: [
      "https://images.unsplash.com/photo-1637761566180-9dbde4fdab77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjBpbiUyMHN0dWRpbyUyMHdvcmtpbmclMjBjb250ZW1wb3Jhcnl8ZW58MXx8fHwxNzY4MTM4Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1767294274527-5a73444d6b48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBpbnN0YWxsYXRpb24lMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc2ODE1MTE0NHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1641766860997-53f4b4a68d23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjBzdHVkaW8lMjBjb250ZW1wb3JhcnklMjBhcnR8ZW58MXx8fHwxNzY4MTUxMTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    id: 4,
    slug: 'sarah-chen',
    name: "Sarah Chen",
    period: "January–June 2026",
    image: "https://images.unsplash.com/photo-1760260623945-07314e790eeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBsb29raW5nJTIwYXQlMjBjYW1lcmElMjBwb3J0cmFpdCUyMGFydGlzdGljfGVufDF8fHx8MTc2ODE1MTAyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: 'current',
    bio: "Sarah Chen is a multidisciplinary artist working at the intersection of technology and nature. Her practice involves the collection of data from natural environments, which she translates into digital visualizations and soundscapes. Chen's work raises questions about our relationship with the natural world in an increasingly digital age.",
    statement: "Chen's current residency project, 'Digital Flora', involves mapping the plant life within the Kunsthalle's vicinity using 3D scanning technology. She is creating a virtual garden that mirrors the physical one, but with surreal, data-driven modifications. This project aims to highlight the hidden complexity of urban ecosystems and the potential for technology to reveal unseen dimensions of our environment.",
    gallery: [
      "https://images.unsplash.com/photo-1760260623945-07314e790eeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBsb29raW5nJTIwYXQlMjBjYW1lcmElMjBwb3J0cmFpdCUyMGFydGlzdGljfGVufDF8fHx8MTc2ODE1MTAyOXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1767294274527-5a73444d6b48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBpbnN0YWxsYXRpb24lMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc2ODE1MTE0NHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1641766860997-53f4b4a68d23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjBzdHVkaW8lMjBjb250ZW1wb3JhcnklMjBhcnR8ZW58MXx8fHwxNzY4MTUxMTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  }
];