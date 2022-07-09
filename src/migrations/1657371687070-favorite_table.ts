import { MigrationInterface, QueryRunner } from "typeorm";

export class favoriteTable1657371687070 implements MigrationInterface {
    name = 'favoriteTable1657371687070'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "favorites" ("user" uuid NOT NULL, "favorite_vehicle" uuid NOT NULL, CONSTRAINT "PK_4877050b5a2de3e366c34a1de73" PRIMARY KEY ("user", "favorite_vehicle"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9fd9fcb17d21b32351fae05110" ON "favorites" ("user") `);
        await queryRunner.query(`CREATE INDEX "IDX_a1bd2ae5b2c5d1e7118353878f" ON "favorites" ("favorite_vehicle") `);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "isFavorite"`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "FK_9fd9fcb17d21b32351fae05110e" FOREIGN KEY ("user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "FK_a1bd2ae5b2c5d1e7118353878f9" FOREIGN KEY ("favorite_vehicle") REFERENCES "vehicles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "FK_a1bd2ae5b2c5d1e7118353878f9"`);
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "FK_9fd9fcb17d21b32351fae05110e"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "isFavorite" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a1bd2ae5b2c5d1e7118353878f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9fd9fcb17d21b32351fae05110"`);
        await queryRunner.query(`DROP TABLE "favorites"`);
    }

}
