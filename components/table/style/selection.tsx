import type { CSSObject } from '@ant-design/cssinjs';
import type { GenerateStyle } from '../../_util/theme';
import type { TableToken } from './index';

const genStyle: GenerateStyle<TableToken, CSSObject> = token => {
  const { componentCls } = token;
  return {
    [`${componentCls}-wrapper`]: {},
  };
};

export default genStyle;
