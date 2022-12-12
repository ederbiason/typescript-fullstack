import { z } from 'zod';
import { procedure, router } from '../trpc';

export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        greeting: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const count = await ctx.prisma.feedback.count()

      return {
        message: `Feebacks: ${count}`,
      };
    }),
});

export type AppRouter = typeof appRouter;