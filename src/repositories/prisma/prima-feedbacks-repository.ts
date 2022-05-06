import { prisma } from '../../prisma';
import { FeedbackCreateData, FeedbackRepository } from '../Feedbacks-repository';

export class PrismaFeedbacksRepository implements FeedbackRepository {
  async create({ comment, type, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        comment,
        type,
        screenshot,
      }
    })
  };
}
