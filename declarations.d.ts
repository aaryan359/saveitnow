declare module '*.png' {
  const content: number;
  export default content;
}

declare module '*.jpeg' {
  const content: number;
  export default content;
}

declare module '*.jpg' {
  const content: number;
  export default content;
}

declare module '*.svg' {
  import { SvgProps } from 'react-native-svg';
  import React from 'react';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.gif' {
  const content: number;
  export default content;
}
