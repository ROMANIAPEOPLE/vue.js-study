<template>
  <div>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>
let items= data.Content.sort((a,b) => {return b.content_id-a.content_id})
items = items.map(contentItem => {return {...contentItem, user_name: data.User.filter(userItem => userItem.user_id === contentItem.user_id)[0].name}})
<script>
import data from '@/data'
  export default {
    data() {
      return {
      fields: [
        {
          key: 'content_id',
          label: '글번호'
        },
        {
          key: 'title',
          label: '제목'
        },
        {
          key: 'content_id',
          label: '작성일'
        },
        {
          key: 'user_name',
          label: '글쓴이'
        }
      ],
      items: items
    };
   }
 };
</script>
