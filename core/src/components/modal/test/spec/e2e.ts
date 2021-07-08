import { testModal } from '../test.utils';

const DIRECTORY = 'spec';

test('modal: card', async () => {
  await testModal(DIRECTORY, '#card-modal', true);
});

test('modal:rtl: card', async () => {
  await testModal(DIRECTORY, '#card-modal', true, true);
});
