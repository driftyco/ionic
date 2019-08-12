import { Animation, AnimationBuilder } from '../../../interface';

import { Animator } from './animator';

export const create = (animationBuilder?: AnimationBuilder, baseEl?: any, opts?: any): Promise<Animation> => {
  if (animationBuilder) {
    return animationBuilder(baseEl, opts);
  }
  return Promise.resolve(new Animator() as any);
};
