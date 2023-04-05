import { Injectable } from '@nestjs/common';
import { Database } from 'sqlite3';

export interface GetTracksData {
  TrackId: number;
  Name: string;
  Price: number;
  Duration: number;
  Genre: string;
}

@Injectable()
export class TrackService {
  constructor(private readonly db: Database) {}

  getTracks(artistName: string, genreName: string, minPrice: number, maxPrice: number, page: number, pageSize: number) {
    const sql = `SELECT TrackId,
                        Track.Name Name,
                        UnitPrice Price,
                        Milliseconds Duration,
                        Genre.Name Genre
                FROM Track
                INNER JOIN Album USING(AlbumId)
                INNER JOIN Artist USING(ArtistId)
                INNER JOIN Genre USING(GenreId)
                WHERE Artist.Name LIKE ? AND
                      Genre.Name LIKE ? AND
                      UnitPrice BETWEEN ? AND ?
                      LIMIT ? OFFSET ?
                `;
    return new Promise<GetTracksData[]>((resolve, reject) => {
      this.db.all(
        sql,
        [
          `%${artistName}%`,
          `%${genreName}%`,
          minPrice,
          maxPrice,
          pageSize,
          page * pageSize,
        ],
        (error, data: GetTracksData[]) => {
          if (error) reject(error);
          else resolve(data);
        },
      );
    });
  }
}
