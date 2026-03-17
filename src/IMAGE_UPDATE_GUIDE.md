# Image Update Guide - Bangkok Kunsthalle Website

## Overview
This document explains how to update images across Exhibitions, Moving Image Programs, and Residencies using the new image URLs from `puma-bangkok-images-4.txt`.

---

## Image URL Structure

### File Naming Pattern
All images follow this naming pattern in the URL:
```
Puma_Bangkok+Kunsthalle+Images+for+Website-[CATEGORY]-[PROGRAM/EXHIBITION]-[DESCRIPTION]
```

### Categories
1. **3. Exhibition** - Exhibition images  
2. **4. Moving Image Program** - Moving Image Program images
3. **6. Residency** - Artist Residency images

### Special Identifiers
- **`COVER`** in filename → Use as **featured image**
- **`copy`** in filename → Use as **featured image**
- Regular images → Add to `gallery[]` array

---

## Image Organization by Program/Exhibition

### EXHIBITIONS

#### 3.15 Splendor in the City
**Match to**: `/utils/exhibitionsDataNew.ts` - Exhibition with title containing "Splendor"

**Featured Image (COVER)**:
```
https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-3.+Exhibition-3.15+Splendor+in+the+City--Mafalda-+Preecha+Pattara+3+COVER-1920w.jpg
```

**Gallery Images**:
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-3.+Exhibition-3.15+Splendor+in+the+City--Mafalda-+Preecha+Pattara+3-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-3.+Exhibition-3.15+Splendor+in+the+City--Mafalada-+Ponpavee+1-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-3.+Exhibition-3.15+Splendor+in+the+City--Mafalda-+Krittawat+Atthsis+12-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-3.+Exhibition-3.15+Splendor+in+the+City--Mafalda-+Preecha+Pattara+19-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-3.+Exhibition-3.15+Splendor+in+the+City--Mafalda-+Krittawat+Atthsis+14-1920w.jpg

---

#### 3.16 A Bit Fountain and a Bit Not
**Match to**: `/utils/exhibitionsDataNew.ts` - Exhibition with title containing "A Bit Fountain"

**Featured Image (COVER)**:
```
https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-3.+Exhibition-3.16+A+Bit+Fountain+and+a+Bit+Not--A+Bit+Fountain+and+a+Bit+Not+1+COVER-1920w.jpg
```

**Gallery Images**:
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-3.+Exhibition-3.16+A+Bit+Fountain+and+a+Bit+Not--A+Bit+Fountain+and+a+Bit+Not+1-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-3.+Exhibition-3.16+A+Bit+Fountain+and+a+Bit+Not--A+Bit+Fountain+and+a+Bit+Not+3-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-3.+Exhibition-3.16+A+Bit+Fountain+and+a+Bit+Not--A+Bit+Fountain+and+a+Bit+Not+2-1920w.jpg

---

#### nostalgia for unity (Generic Exhibition)
**Match to**: `/utils/exhibitionsDataNew.ts` - Exhibition with title "nostalgia for unity"

**Gallery Images**:
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-3.+Exhibition--nostalgia+for+unity-+Artit+Punyanutaruk+37-1920w.jpg

---

### MOVING IMAGE PROGRAMS

#### 4.1 Infringes
**Match to**: `/utils/movingImageData.ts` - slug: 'infringes'

**Featured Image (COVER)**:
```
https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.1+Infringes--Infringes+-Andrea+Rossetti+1+COVER-1920w.jpg
```

**Gallery Images**:
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.1+Infringes--Infringes+-Andrea+Rossetti+30-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.1+Infringes--Infringes+-Andrea+Rossetti+1-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.1+Infringes--Riar+Rizaldi-+Notes+from+Gog+Magog-+2022-+20+minutes-+courtesy+of+the+artist-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.1+Infringes--Rhea+Storr-+A+Protest-+A+Celebration-+A+Mixed+Message-+2018-+12minutes-+courtesy+of+the+artist+and+LUX+London-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.1+Infringes--Infringes+-Andrea+Rossetti+22-1920w.jpg

---

#### 4.2 Shapeshifting Spaces
**Match to**: `/utils/movingImageData.ts` - slug: 'shapeshifting-spaces'

**Featured Image (COVER)**:
```
https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.2+Shapeshifting+Spaces--Moving+Image+Programs-+Puttisin+Choojesroom+1+COVER-1920w.jpg
```

**Gallery Images**:
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.2+Shapeshifting+Spaces--Moving+Image+Programs-+Puttisin+Choojesroom+2-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.2+Shapeshifting+Spaces--Lawrence+Lek-+Black+Cloud-+courtesy+of+the+artist+10-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.2+Shapeshifting+Spaces--Moving+Image+Programs-+Puttisin+Choojesroom+5-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.2+Shapeshifting+Spaces--Moving+Image+Programs-+Puttisin+Choojesroom+1-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.2+Shapeshifting+Spaces--Surapong+Pinijkhar-+Sampeng+1-1920w.jpg

---

#### 4.3 we gather
**Match to**: `/utils/movingImageData.ts` - slug: 'we-gather'

**Featured Image (COVER)**:
```
https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.3+we+gather--Moving+Image+Programs-+Puttisin+Choojesroom+15+COVER-1920w.jpg
```

**Gallery Images**:
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.3+we+gather--AFSAR-DAVRA-+Proxy+Conference+In+Forest+11-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.3+we+gather--Isaac+Wai-+Rehearsal+of+the+Futures+Police+Training+2-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.3+we+gather--Moving+Image+Programs-+Puttisin+Choojesroom+15-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.3+we+gather--Andrew+Norman+Wilson-+Silvesterchl%C3%A4usen+1-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.3+we+gather--Saodat+Ismailova-+Chillpiq+1-1920w.jpg

---

#### 4.4 seeds
**Match to**: `/utils/movingImageData.ts` - slug: 'seeds'

**Featured Image (COVER)**:
```
https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.4+seeds--Tang+Han-+Ginkgo+and+Other+Times+3+COVER-1920w.jpg
```

**Gallery Images**:
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.4+seeds--Tang+Han-+Ginkgo+and+Other+Times+1-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.4+seeds--Mooni+Perry-+Binlang+Xishi+2-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.4+seeds--Tang+Han-+Ginkgo+and+Other+Times+6-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.4+seeds--Mooni+Perry-+Binlang+Xishi+3-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.4+seeds--Tang+Han-+Ginkgo+and+Other+Times+3-1920w.jpg

---

#### 4.5 Search for Life I
**Match to**: `/utils/movingImageData.ts` - slug: 'search-for-life-i'

**Featured Image (COVER)**:
```
https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.5+Search+for+Life+I--Search+for+Life+I-+Krittawat+-+Prapasiri+5+COVER-1920w.jpg
```

**Gallery Images**:
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.5+Search+for+Life+I--Warm+Spell-+Krittawat+-+Prapasiri+1-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.5+Search+for+Life+I--Search+for+Life+I-+Krittawat+-+Prapasiri+5-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.5+Search+for+Life+I--Search+for+Life+I+1-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.5+Search+for+Life+I--Search+for+Life+I+2-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.5+Search+for+Life+I--Search+for+Life+I-+Krittawat+-+Prapasiri+10-1920w.jpg

---

#### 4.6 Inviting You to Die With Me
**Match to**: `/utils/movingImageData.ts` - slug: 'inviting-you-to-die-with-me'

**Featured Image (COVER)**:
```
https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.6+Inviting+You+to+Die+With+Me--Inviting+You+to+Die+With+Me-+Prapasiri+3+COVER-1920w.jpg
```

**Gallery Images**:
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.6+Inviting+You+to+Die+With+Me--Inviting+You+to+Die+With+Me-+Prapasiri+3-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.6+Inviting+You+to+Die+With+Me--Inviting+You+to+Die+With+Me-+Prapasiri+7-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.6+Inviting+You+to+Die+With+Me--12+Kalpas+A+Beginning+of+Beginning+4-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.6+Inviting+You+to+Die+With+Me--Blinded+by+Centuries+1-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.6+Inviting+You+to+Die+With+Me--Blinded+by+Centuries+2-1920w.jpg

---

#### Generic Moving Image Program
**Match to**: Generic moving image programs

**Gallery Images**:
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program--Moving+Image+Programs-+Puttisin+Choojesroom+7-1920w.jpg

---

### RESIDENCIES

#### 6.1 Emma McCormick Goodhart
**Match to**: `/utils/residencyData.ts` - slug: 'emma-mccormick-goodhart'

**Featured Image (COVER)**:
```
https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.1+Emma+McCormick+Goodhart--glai+glaai-+Puttisin+Choojesroom+4+COVER-1920w.jpg
```

**Gallery Images**:
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.1+Emma+McCormick+Goodhart--glai+glaai-+Puttisin+Choojesroom+13-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.1+Emma+McCormick+Goodhart--glai+glaai-+Puttisin+Choojesroom+21-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.1+Emma+McCormick+Goodhart--glai+glaai-+Puttisin+Choojesroom+11-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.1+Emma+McCormick+Goodhart--glai+glaai-+Puttisin+Choojesroom+4-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.1+Emma+McCormick+Goodhart--glai+glaai-+Puttisin+Choojesroom+6-1920w.jpg

---

#### 6.2 Natalie Brück
**Match to**: `/utils/residencyData.ts` - slug: 'natalie-bruck'

**Featured Image (COVER)**:
```
https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.2+Natalie+Br%C3%BCck--Working+On+The+Imaginary+Object-+Sivakorn+Charoenyothin+1+COVER-1920w.jpg
```

**Gallery Images**:
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.2+Natalie+Br%C3%BCck--Working+On+The+Imaginary+Object-+Sivakorn+Charoenyothin+2-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.2+Natalie+Br%C3%BCck--Working+On+The+Imaginary+Object-+Sivakorn+Charoenyothin+5-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.2+Natalie+Br%C3%BCck--Working+On+The+Imaginary+Object-+Sivakorn+Charoenyothin+6-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.2+Natalie+Br%C3%BCck--Working+On+The+Imaginary+Object-+Sivakorn+Charoenyothin+3-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.2+Natalie+Br%C3%BCck--Working+On+The+Imaginary+Object-+Sivakorn+Charoenyothin+1-1920w.jpg

---

#### 6.3 Cole Lu
**Match to**: `/utils/residencyData.ts` - slug: 'cole-lu'

**Featured Image (COVER)**:
```
https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.3+Cole+Lu--Cole+Lu-+The+Engineers-+Kanrapee+Chokpaiboon+2+COVER-1920w.jpg
```

**Gallery Images**:
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.3+Cole+Lu--Cole+Lu-+The+Engineers-+Kanrapee+Chokpaiboon+19-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.3+Cole+Lu--The+Engineers-+Krittawat+Atthsis+and+Puttisin+Choojesroom+2-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.3+Cole+Lu--Cole+Lu-+The+Engineers-+Kanrapee+Chokpaiboon+20-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.3+Cole+Lu--The+Engineers-+Krittawat+Atthsis+and+Puttisin+Choojesroom+3-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.3+Cole+Lu--Cole+Lu-+The+Engineers-+Kanrapee+Chokpaiboon+2-1920w.jpg

---

#### 6.4 Nicolas Amato
**Match to**: `/utils/residencyData.ts` - slug: 'nicolas-amato'

**Featured Image (COVER)**:
```
https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.4+Nicolas+Amato--Unwinding+Architecture-+Bangkok+Kunsthalle+1+COVER-1920w.jpg
```

**Gallery Images**:
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.4+Nicolas+Amato--Unwinding+Architecture-+Bangkok+Kunsthalle+7-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.4+Nicolas+Amato--Unwinding+Architecture-+Bangkok+Kunsthalle+1-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.4+Nicolas+Amato--Unwinding+Architecture-+Bangkok+Kunsthalle+16-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.4+Nicolas+Amato--Unwinding+Architecture-+Bangkok+Kunsthalle+9-1920w.jpg

---

#### 6.5 Anthony Huberman
**Match to**: `/utils/residencyData.ts` - slug: 'anthony-huberman'

**Featured Image (COVER)**:
```
https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.5+Anthony+Huberman--An+Artist+Led+Approach-+Bangkok+Kunsthalle+1+COVER-1920w.jpg
```

**Gallery Images**:
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.5+Anthony+Huberman--An+Artist+Led+Approach-+Bangkok+Kunsthalle+1-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.5+Anthony+Huberman--An+Artist+Led+Approach-+Bangkok+Kunsthalle+4-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.5+Anthony+Huberman--An+Artist+Led+Approach-+Bangkok+Kunsthalle+2-1920w.jpg

---

#### 6.6 Spencer Sweeney
**Match to**: `/utils/residencyData.ts` - slug: 'spencer-sweeney'

**Featured Image (COVER)**:
```
https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.6+Spencer+Sweeney--Living+Cinematheque-+Prapasiri+Kasemkijkajorn+6+COVER-1920w.jpg
```

**Gallery Images**:
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.6+Spencer+Sweeney--Living+Cinematheque-+Prapasiri+Kasemkijkajorn+5-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.6+Spencer+Sweeney--Living+Cinematheque-+Prapasiri+Kasemkijkajorn+6-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.6+Spencer+Sweeney--Living+Cinematheque-+Patsu+Supakajohnwanich+11-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.6+Spencer+Sweeney--Disco+Hut-+Prapasiri+Kasemkijkajorn-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.6+Spencer+Sweeney--Living+Cinematheque-+Patsu+Supakajohnwanich+6-1920w.jpg

---

#### 6.7 Luca Lo Pinto
**Match to**: `/utils/residencyData.ts` - slug: 'luca-lo-pinto'

**Featured Image (COVER)**:
```
https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.7+Luca+Lo+Pinto--From+Display+to+Discourse-+Bangkok+Kunsthalle+7+COVER-1920w.jpg
```

**Gallery Images**:
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.7+Luca+Lo+Pinto--From+Display+to+Discourse-+Bangkok+Kunsthalle+7-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.7+Luca+Lo+Pinto--From+Display+to+Discourse-+Bangkok+Kunsthalle+4-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.7+Luca+Lo+Pinto--From+Display+to+Discourse-+Bangkok+Kunsthalle+5-1920w.jpg

---

#### 6.8 Eduardo Williams
**Match to**: `/utils/residencyData.ts` - slug: 'eduardo-williams'

**Featured Image (COVER/copy)**:
```
https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.8+Eduardo+Williams--A+Very+Long+Gif-+Patsu+Supakajohnwanich+2+COVER-1920w.jpg
```

Alternative (with "copy" in filename):
```
https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.8+Eduardo+Williams--Parsi14+copy-1920w.jpg
```

**Gallery Images**:
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.8+Eduardo+Williams--Teddy+workshop-+Krittawat+Atthsis+3-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.8+Eduardo+Williams--A+Very+Long+Gif-+Patsu+Supakajohnwanich+2-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.8+Eduardo+Williams--Teddy+workshop-+Krittawat+Atthsis+16-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.8+Eduardo+Williams--Teddy+workshop-+Krittawat+Atthsis+10-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.8+Eduardo+Williams--Parsi14+copy-1920w.jpg

---

#### 6.9 Apichaya Wannakit
**Match to**: `/utils/residencyData.ts` - slug: 'apichaya-wannakit'

**Featured Image (COVER)**:
```
https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.9+Apichaya+Wannakit--Apichaya+Wannakit-+Legacy+between+absence+and+eternity+4+COVER-1920w.jpg
```

**Gallery Images**:
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.9+Apichaya+Wannakit--WhatsApp+Image+2025-12-24+at+15.01.32+%281%29-1920w.jpeg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.9+Apichaya+Wannakit--WhatsApp+Image+2025-12-24+at+15.01.33-1920w.jpeg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.9+Apichaya+Wannakit--Apichaya+Wannakit-+Legacy+between+absence+and+eternity+4-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.9+Apichaya+Wannakit--WhatsApp+Image+2025-12-24+at+15.09.40-1920w.jpeg

---

#### 6.10 Rolf Sachs
**Match to**: `/utils/residencyData.ts` - slug: 'rolf-sachs'

**Featured Image (COVER)**:
```
https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.10+Rolf+Sachs--DSC00813+COVER-1920w.jpg
```

**Gallery Images**:
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.10+Rolf+Sachs--DSC00813-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.10+Rolf+Sachs--Rolf+Sachs-+Preecha+Pattara+31-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.10+Rolf+Sachs--Rolf+Sachs-+Sirikanya+27-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.10+Rolf+Sachs--Rolf+Sachs-+Preecha+Pattara+1-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.10+Rolf+Sachs--%E0%B8%AA%E0%B8%B3%E0%B9%80%E0%B8%99%E0%B8%B2%E0%B8%82%E0%B8%AD%E0%B8%87+Bangkok+portraits-60-1920w.jpg

---

#### 6.11 Mafalda von Hessen
**Match to**: `/utils/residencyData.ts` - slug: 'mafalda-von-hessen'

**Featured Image (COVER)**:
```
https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.11+Mafalda+von+Hessen--Mafalda-+Preecha+Pattara+6+COVER-1920w.jpg
```

**Gallery Images**:
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.11+Mafalda+von+Hessen--Mafalda-+Preecha+Pattara+6-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.11+Mafalda+von+Hessen--Mafalda-+Sirikanya+9-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.11+Mafalda+von+Hessen--Mafalda-+Preecha+Pattara+2-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.11+Mafalda+von+Hessen--Mafalada-+Ponpavee+20-1920w.jpg
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency-6.11+Mafalda+von+Hessen--Mafalda-+Preecha+Pattara+17-1920w.jpg

---

#### Generic Residency
**Match to**: Generic residency programs

**Gallery Images**:
- https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-6.+Residency--Living+Cinematheque-+Prapasiri+Kasemkijkajorn+6-1920w.jpg

---

## Update Instructions

### Step 1: Identify the Program/Exhibition
Match the URL identifier (e.g., "4.1 Infringes", "6.3 Cole Lu") to the corresponding slug in your data files.

### Step 2: Update Featured Image
Replace the old `featuredImage` field with the URL containing `COVER` or `copy` in its filename.

### Step 3: Update Gallery Array
Replace the entire `gallery: []` array with the new image URLs (excluding the COVER image, as it's already the featured image).

### Step 4: Remove Old Images
Delete all old image URLs that are not in the new puma-bangkok-images-4.txt file.

---

## Important Notes

1. **URL Format**: All new URLs use `lirp.cdn-website.com` instead of `irp.cdn-website.com`
2. **Image Sizes**: Prioritize `-1920w` versions for full-size gallery images
3. **Duplicates**: Some images appear multiple times with slight variations (e.g., `%281%29` suffix) - use the cleaner URL without duplicates
4. **COVER Priority**: Always use COVER images as featured images when available
5. **Order**: Generally, place the featured/cover image first in the gallery array, followed by other images in descending quality/importance

---

**Last Updated**: March 17, 2026  
**Source File**: `/imports/pasted_text/puma-bangkok-images-4.txt`
