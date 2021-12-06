CREATE TABLE "musics" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL UNIQUE,
	"youtubeLink" TEXT NOT NULL UNIQUE,
	"score" integer NOT NULL DEFAULT '0',
	CONSTRAINT "musics_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);





