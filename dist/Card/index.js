import { withTheme } from '../config';
import { CardBase } from './CardBase';
import { CardDivider } from './CardDivider';
import { CardFeaturedSubtitle } from './CardFeaturedSubtitle';
import { CardFeaturedTitle } from './CardFeaturedTitle';
import { CardImage } from './CardImage';
import { CardTitle } from './CardTitle';
const ThemedCardDivider = withTheme(CardDivider, 'CardDivider');
const ThemedCardFeaturedSubtitle = withTheme(CardFeaturedSubtitle, 'CardFeaturedSubtitle');
const ThemedCardFeaturedTitle = withTheme(CardFeaturedTitle, 'CardFeaturedTitle');
const ThemedCardImage = withTheme(CardImage, 'CardImage');
const ThemedCardTitle = withTheme(CardTitle, 'CardTitle');
export const Card = Object.assign(CardBase);
const ThemedCard = Object.assign(withTheme(Card, 'Card'), {
    Divider: ThemedCardDivider,
    Image: ThemedCardImage,
    Title: ThemedCardTitle,
    FeaturedTitle: ThemedCardFeaturedTitle,
    FeaturedSubtitle: ThemedCardFeaturedSubtitle,
});
export default ThemedCard;
