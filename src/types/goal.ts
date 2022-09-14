export type Goal = {
  id: string;
  name: string;
  redsRequired: number;
  bluesRequired: number;
  leapsRequired: number;
  shardsRequired: number;
  isCustom?: boolean;
};
