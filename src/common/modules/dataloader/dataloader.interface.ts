import DataLoader from 'dataloader';
import { Variants } from 'generated/prisma';

export interface IDataLoaders {
  variantsLoader: DataLoader<string, Variants[]>;
}
