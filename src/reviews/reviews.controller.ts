import { Controller, Get } from '@nestjs/common';

@Controller()
export class ReviewsController {
  @Get('~/api/reviews')
  public getAllReviews() {
    return [
      { id: 1, productId: 1, title: 'Review 1', rating: 5 },
      { id: 2, productId: 2, title: 'Review 2', rating: 4 },
      { id: 3, productId: 3, title: 'Review 3', rating: 3 },
    ];
  }
}
