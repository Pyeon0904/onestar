import {createAvatar} from '@dicebear/core';
import {notionists} from '@dicebear/collection';

interface Props {
  className?: string;
}

export default function Avatar({className}: Props) {
  const avatar = createAvatar(notionists, {seed: 'Andrea'});
  const svg = avatar.toString();

  return (
    <div
      dangerouslySetInnerHTML={{__html: svg}}
      style={{width: 100, height: 100}}
      className={className}
    />
  );
}