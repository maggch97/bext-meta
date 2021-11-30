import { Title } from './title';
import { useMeta } from '@/contexts/use-meta';
import { Icon, useTheme } from '@fluentui/react';
import { FC } from 'react';
import { Link } from 'umi';

export const TagList: FC = () => {
  const { tagList, metaTag } = useMeta();
  const theme = useTheme();
  return (
    <>
      <Title>全部分类</Title>
      <div className="grid grid-cols-2 gap-4">
        {tagList.map((tag) => (
          <Link to={`/meta?tag=${encodeURIComponent(tag)}`} key={tag}>
            <div
              className="h-[70px] flex items-center cursor-pointer"
              style={{
                boxShadow: theme.effects.elevation4,
              }}
            >
              <Icon
                iconName={metaTag[tag]?.icon || 'TestBeaker'}
                className="text-2xl pl-3 pr-1"
              />
              <div className="h-full flex-1 overflow-hidden p-2">
                <div className="font-normal text-sm truncate">{tag}</div>
                <div className="text-xs line-clamp-2">
                  {metaTag[tag]?.description || '暂无描述'}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
