import { WPPost } from 'interfaces/api';
import api from './api';

/**
 * we patch in the category of a post here.
 *
 * FIXME: theres gotta be an easier way to do this. lookup wpapi-js docs
 * @param post WPPost object to patch the category.
 */
const patchCategory = (post: WPPost, lang: string = 'en') => {
  post.wp_category = [];
  post.categories.forEach((cat, index) => {
    api
      .categories()
      .param('lang', lang)
      .id(cat)
      .embed()
      .then(res => (post.wp_category[index] = res));
  });
};

export default patchCategory;
