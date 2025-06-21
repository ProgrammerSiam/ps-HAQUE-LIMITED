import UserProfile from "@/components/dashboard/UserProfile";
import { PageLayout } from "@/components/dashboard/PageLayout";

const ProfilePage = () => {
  return (
    <PageLayout title="My Profile">
      <UserProfile />
    </PageLayout>
  );
};

export default ProfilePage;
