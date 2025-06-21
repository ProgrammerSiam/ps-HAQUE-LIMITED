import { ChangePasswordForm } from "@/components/dashboard/ChangePasswordForm";
import { PageLayout } from "@/components/dashboard/PageLayout";

const SettingsPage = () => {
  return (
    <PageLayout title="Settings">
      <ChangePasswordForm />
    </PageLayout>
  );
};

export default SettingsPage;
