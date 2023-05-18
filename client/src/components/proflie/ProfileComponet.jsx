import { AccountProfileComponet } from "./AccountProfileComponet";
import { BillingProfileComponet } from "./BillingProfileComponet";
import { OrderHistoryComponet } from "./OrderHistoryComponet";

export function ProfileComponet() {
  return (
    <>
      <AccountProfileComponet />
      <BillingProfileComponet />
      <OrderHistoryComponet />
    </>
  );
}
