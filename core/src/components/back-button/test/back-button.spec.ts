import { BackButton } from "../back-button";
import { config } from "../../../global/config";


describe('back button', () => {
  let bb: BackButton;

  beforeEach(() => {
    config.reset({});
    bb = new BackButton();
  });

  describe('backButtonIcon', () => {

    it('set custom icon on the instance, override config', () => {
      bb.icon = 'custom-icon-instance';
      config.reset({
        backButtonIcon: 'custom-icon-config'
      });
      expect(bb.backButtonIcon).toBe('custom-icon-instance');
    });

    it('set custom icon in the config', () => {
      config.reset({
        backButtonIcon: 'custom-icon-config'
      });
      expect(bb.backButtonIcon).toBe('custom-icon-config');
    });

    it('set custom icon on the instance', () => {
      bb.icon = 'custom-icon-instance';
      expect(bb.backButtonIcon).toBe('custom-icon-instance');
    });

    it('default icon for ios mode', () => {
      bb.mode = 'ios';
      expect(bb.backButtonIcon).toBe('chevron-back');
    });

    it('default icon', () => {
      expect(bb.backButtonIcon).toBe('arrow-back-sharp');
    });

  });

  describe('backButtonText', () => {

    it('default text for ios mode', () => {
      bb.mode = 'ios';
      expect(bb.backButtonText).toBe('Back');
    });

    it('default text', () => {
      expect(bb.backButtonText).toBe(null);
    });

  });

  describe('backButtonDefaultHref', () => {

    it('set custom defaultHref on the instance, override config', () => {
      bb.defaultHref = 'custom-default-href';
      config.reset({
        backButtonDefaultHref: 'custom-default-href-config'
      });
      expect(bb.backButtonDefaultHref).toBe('custom-default-href');
    });

    it('set custom defaultHref in the config', () => {
      config.reset({
        backButtonDefaultHref: 'custom-default-href-config'
      });
      expect(bb.backButtonDefaultHref).toBe('custom-default-href-config');
    });

    it('set custom defaultHref on the instance', () => {
      bb.defaultHref = 'custom-default-href';
      expect(bb.backButtonDefaultHref).toBe('custom-default-href');
    });

  });

});
