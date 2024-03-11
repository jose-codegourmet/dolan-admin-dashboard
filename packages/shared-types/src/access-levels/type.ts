type TOrganizationAccessLevel =
  | "view_organization"
  | "add_organization"
  | "edit_organization"
  | "archive_organization"
  | "delete_organization";

type TProductAccessLevel =
  | "view_product"
  | "add_product"
  | "edit_product"
  | "archive_product"
  | "delete_product";

type TCollectionAccessLevel =
  | "view_collection"
  | "add_collection"
  | "edit_collection"
  | "archive_collection"
  | "delete_collection";

type TBranchAccessLevel =
  | "view_branch"
  | "add_branch"
  | "edit_branch"
  | "archive_branch"
  | "delete_branch";

type TStorageAccessLevel =
  | "view_storage"
  | "add_storage"
  | "edit_storage"
  | "archive_storage"
  | "delete_storage";

type TOrderAccessLevel =
  | "view_order"
  | "add_order"
  | "edit_order"
  | "archive_order"
  | "delete_order";

type TDraftOrderAccessLevel =
  | "view_draft_order"
  | "add_draft_order"
  | "edit_draft_order"
  | "archive_draft_order"
  | "delete_draft_order";

type TCustomerAccessLevel =
  | "view_customer"
  | "add_customer"
  | "edit_customer"
  | "archive_customer"
  | "delete_customer";

type TStaffAccessLevel =
  | "view_staff"
  | "add_staff"
  | "edit_staff"
  | "revoke_access_staff"
  | "delete_staff";

type TStaffTypeAccessLevel =
  | "view_staff_type"
  | "add_staff_type"
  | "edit_staff_type"
  | "delete_staff_type";

type TReportsAccessLevel = "view_reports";

type TNotificationsAccessLevel = "view_notifications";

export type TAccessLevel =
  | TOrganizationAccessLevel
  | TProductAccessLevel
  | TCollectionAccessLevel
  | TBranchAccessLevel
  | TStorageAccessLevel
  | TOrderAccessLevel
  | TDraftOrderAccessLevel
  | TCustomerAccessLevel
  | TStaffAccessLevel
  | TStaffTypeAccessLevel
  | TReportsAccessLevel
  | TNotificationsAccessLevel;
