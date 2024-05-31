import { ContentImage } from '@/components';
import { SkeletonFont } from '@/styles/Notice/Skeleton';
import { CardWrapper, CardItem, Notice } from '@/styles/Notice/NoticeList';

const SkeletonCard = () => {
  return (
    <CardWrapper>
      <CardItem>
        <ContentImage imageURL="/assets/skeleton.svg" />
        <Notice>
          <SkeletonFont $size="lg" />
          <SkeletonFont $size="sm" />
          <SkeletonFont $size="md" />
          <SkeletonFont $size="md" $variant="date" />
        </Notice>
      </CardItem>
    </CardWrapper>
  );
};

export default SkeletonCard;
