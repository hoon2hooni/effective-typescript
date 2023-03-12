{
  {
    const extent = (nums: number[]) => {
      let min, max;
      for (const num of nums) {
        if (!min) {
          min = num;
          max = num;
        } else {
          min = Math.min(min, num);
          max = Math.max(max, num);
        }
      }
      return [min, max];
    };
  }
  {
    const extent = (nums: number[]) => {
      let result: [number, number] | null = null;
      for (const num of nums) {
        if (!result) {
          result = [num, num];
        } else {
          result = [Math.min(num, result[0]), Math.max(num, result[1])];
        }
      }
      return result;
    };
    const a = extent([]);
    const range = extent([0, 1, 2]);
    if (range) {
      const [min, max] = range;
      const span = max - min; // OK
    }
  }
  {
    class UserPosts {
      user: UserInfo | null;
      posts: Post[] | null;
      constructor() {
        this.user = null;
        this.posts = null;
      }
      async init(userId: string) {
        return Promise.all([
          async () => (this.user = await fetchUser(userId)),
          async () => (this.posts = await fetchPostsForUser(userId)),
        ]);
      }
      getUserName() {
        // ...?
      }
    }
  }
  {
    class UserPosts {
      user: UserInfo;
      posts: Post[];
      constructor(user: UserInfo, posts: Post[]) {
        this.user = user;
        this.posts = posts;
      }
      static async init(userId: string): Promise<UserPosts> {
        const [user, posts] = await Promise.all([
          fetchUser(userId),
          fetchPostsForUser(userId),
        ]);
        return new UserPosts(user, posts);
      }
      getUserName() {
        return this.user.name;
      }
    }

    
  }
}
