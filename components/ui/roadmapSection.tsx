import React from 'react'
import Milestone from './milestone';
import { MileStoneItemType } from '@/types';

interface RoadmapSectionProps {
  title: string;
  milestones: MileStoneItemType[];
}

const RoadmapSection = ({ title, milestones }: RoadmapSectionProps) => {
  return (
    <div className="flex flex-col gap-[70px]">
      <h2
        className="text-[40px] gradient-heading font-bold w-fit"
      >
        {title}
      </h2>
      <div>
        {
          milestones.map((milestoneItem: MileStoneItemType) => (
            <Milestone
              key={milestoneItem.index}
              index={milestoneItem.index}
              title={milestoneItem.title}
              content={milestoneItem.content}
              isFinalItem={milestoneItem.isFinalItem}
            />
          ))
        }
      </div>
    </div>
  )
}

export default RoadmapSection