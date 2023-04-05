import { Args, Query, Resolver } from '@nestjs/graphql';
import { TrackService } from './track.service';
import { Track } from './track.model';

@Resolver(() => Track)
export class TrackResolver {
  constructor(private readonly trackService: TrackService) {}

  @Query(() => [Track])
  async getTracks(
    @Args('artistName') artistName: string,
    @Args('genreName') genreName: string,
    @Args('minPrice') minPrice: number,
    @Args('maxPrice') maxPrice: number,
    @Args('page') page: number,
    @Args('pageSize') pageSize: number,
  ): Promise<Track[]> {
    const tracks = await this.trackService.getTracks(artistName, genreName, minPrice, maxPrice, page, pageSize);
    return tracks.map((a) => ({ id: a.TrackId, name: a.Name, price: a.Price, duration: a.Duration, genre: a.Genre }));
  }
}
