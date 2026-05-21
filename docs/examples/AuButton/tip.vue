<template>
  <au-layout-page class="au_button_demo">
    <au-layout-page-item>
      <au-button text style="font-size: 28px" tip="编辑" icon="Edit" />
      <au-button text tip="删除" icon="Delete" />
      <au-button link tip="primary" icon="Search" />
      <au-button text tip="primary" icon="Search" />
      <au-button text type="primary" tip="primary" icon="Edit" />
      <au-button text type="success" tip="success" icon="Check" />
      <au-button text type="info" tip="info" icon="Message" />
      <au-button text type="warning" tip="warning" icon="Star" />
      <au-button
        text
        type="danger"
        tip="danger"
        icon="Delete"
        :tipProps="{
          effect: 'light',
          placement: 'bottom'
        }"
      />
    </au-layout-page-item>
  </au-layout-page>
</template>
