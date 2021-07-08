import { testModal } from '../test.utils';

const DIRECTORY = 'custom';

test('modal: custom', async () => {
  await testModal(DIRECTORY, '#custom-modal', false);
});

test('modal:rtl: custom', async () => {
  await testModal(DIRECTORY, '#custom-modal', false, true);
});
