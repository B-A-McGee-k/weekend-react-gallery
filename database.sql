CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.'),
('images/Happy-Goat.jpg', 'Silly Guy!', 'Photo of a goat smiling from donbrobst.com'),
('images/Not-a-Goat.jpg', 'NOT A GOAT!', 'BEWARE OF THIS SO CALLED GOAT, from southdakotamagazine.com'),
('images/goat_stache.png', 'Goat Stache!', 'Photo of a mustachioed goat taken at Glacier National Park.');
  