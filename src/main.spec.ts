import './main';
import { expect, it, describe } from 'vitest';
import {mount} from '@vue/test-utils'
import Hello from '../src/components/HelloWorld.vue';
import Canvas from '../src/components/Canvas.vue';

describe('main', () => {
  const mountHello = (props: any) => mount(Hello, {props})
  const mountCanvas = (props: any) => mount(Canvas, {props})

  it('helloworld mounted', () => {
    const wrapper = mountHello({
        msg: 'Vite + Vue',
      })

      const container = wrapper.find('[data-testid="hello-box"]')
      expect(container.classes()).toContain('bg-blue-100')
      expect(container.text()).toContain('Vite + Vue')
  });

  it('Canvas mounted', () => {
    const wrapper = mountCanvas({})

      const container = wrapper.find('[data-testid="stencil"]')
  });
});
