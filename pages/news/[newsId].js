import { useRouter } from "next/router";

//  ourdomain/news/something-important

function DetailPage() {
  const router = useRouter();

  //  This is now to access variable data stored in the filename btw the [].
  //  If you type '/this-course-is-great', will log 'this-course-is-great'.
  //console.log(router.query.newsId);
  const newsId = router.query.newsId;

  //  send a request to the backend API to fetch the news item with newsId.

  return <h1>The Detail Page</h1>;
}

export default DetailPage;
