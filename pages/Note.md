<!-- getStaticProps với từng locale
Để hiển thị danh sách các bài đăng bằng ngôn ngữ đã chọn, locale params sẽ có sẵn trong getStaticProps, vì thế có thể pass chúng ngay trong chức năng fetching data.
export async function getStaticProps({ locale }) {
  const allPosts = await getAllPostsForHome(locale)
  return {
    props: { allPosts },
  }
} -->

<!-- Tối ưu hoá phần tìm kiếm
NextJS sẽ thêm một thuộc tính ngôn ngữ toàn cục vào website cùng với locale hiện tại. Tuy nhiên, nếu có thêm file _document.js, thì cần đảm bảo rằng các giá trị ngôn ngữ được cố định sẵn trong đó phải được xoá hết đi.

Để cho các công cụ tìm kiếm tìm được bản bài đăng mới nhất bằng các ngôn ngữ khác nhau, chúng ta phải đặt thêm một thẻ meta là hreflang cho từng ngôn ngữ (bao gồm cả ngôn ngữ gốc), thẻ này sẽ đặt ở phần đầu của bài đăng trên website.

Ví dụ:

import Head from 'next/head'

export default function Post({ post }) {
return (
...
  <article>
    <Head>
        <link rel="alternate" hreflang={locale} href={`${SITE_URL}${locale}/${post?.slug}`} />
        <link rel="alternate" hreflang={altLocale} href={`${SITE_URL}${altLocale}/${altPost?.slug}`} />
    </Head>
  </article>
...
)} -->