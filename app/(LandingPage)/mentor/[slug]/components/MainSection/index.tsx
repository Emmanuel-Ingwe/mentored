import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/shared/components/ui/tabs';
import { GroupSessionsContent } from '../GroupSessionsContent';
import { OverviewContent } from '../OverviewContent';
import { ReviewsContent } from '../ReviewsContent';

export const MainSection = () => {
  return (
    <main className="bg-gray-25 pb-24 pt-8 lg:px-16 lg:pt-16">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="h-auto w-full justify-normal gap-8 rounded-none border-b border-gray-300 bg-transparent p-0">
          <TabsTrigger value="overview" className="mentor-trigger-button">
            Overview
          </TabsTrigger>
          <TabsTrigger value="reviews" className="mentor-trigger-button">
            Reviews
          </TabsTrigger>
          <TabsTrigger value="group-sessions" className="mentor-trigger-button">
            Group Sessions
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="flex gap-12">
          <OverviewContent />
        </TabsContent>
        <TabsContent value="reviews" className="">
          <ReviewsContent />
        </TabsContent>
        <TabsContent value="group-sessions" className="">
          <GroupSessionsContent />
        </TabsContent>
      </Tabs>
    </main>
  );
};
