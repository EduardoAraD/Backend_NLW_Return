import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

// spies = espiões
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeddback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(submitFeddback.execute({
      type: 'BUG',
      comment: 'exemple comment',
      screenshot: 'data:image/png;base64,jasjkdansd',
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be able to submit a feedback without type', async () => {
    await expect(submitFeddback.execute({
      type: '',
      comment: 'exemple comment',
      screenshot: 'data:image/png;base64,jasjkdansd',
    })).rejects.toThrow();
  });

  it('should not be able to submit a feedback without comment', async () => {
    await expect(submitFeddback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,jasjkdansd',
    })).rejects.toThrow();
  });

  it('should not be able to submit a feedback without an invalid screenshot', async () => {
    await expect(submitFeddback.execute({
      type: 'BUG',
      comment: 'ta tudo bugado!',
      screenshot: 'test.jpg',
    })).rejects.toThrow();
  });

})
