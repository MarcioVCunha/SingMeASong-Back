CREATE TABLE "musics" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL UNIQUE,
	"link" TEXT NOT NULL UNIQUE,
	"votes" integer NOT NULL DEFAULT '0',
	CONSTRAINT "musics_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);





