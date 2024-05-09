<!-- @format -->

<template>
    <Timeline mode="alternate">
        <TimelineItem
            v-for="item in issues"
            :key="item.id"
            :color="item.color"
        >
            <span style="color: #a09eb3">{{ item.time }}</span>
            <div>
                <Card hoverable>
                    <template
                        #cover
                        v-if="item.imgUrl"
                    >
                        <img
                            ref="pic"
                            alt="example"
                            :src="item.imgUrl"
                            @click="handlePreview(item)"
                        />
                    </template>
                    <span slot="title">Q：{{ item.title }}</span>
                    <br />
                    <span slot="description">A：{{ item.description }}</span>
                </Card>
            </div>
        </TimelineItem>
    </Timeline>
</template>

<script setup>
    import { ref } from "vue";
    import "ant-design-vue/dist/reset.css";
    import { Timeline, TimelineItem, Card } from "ant-design-vue";
    import issuesList from "./assets/issues.mjs";

    const pic = ref();
    const issues = ref(issuesList);

    console.log(issuesList, "list");

    const handlePreview = (pic) => {
        console.log(pic);
        // 图片URL
        const imageUrl = pic.imgUrl;

        const imageTitle = pic.id + ".png";

        // 创建一个新的浏览器窗口或标签页
        const previewWindow = window.open("about:blank", "_blank");

        // 在新的页面中写入HTML内容，包括预览图片
        const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${imageTitle}</title>
        </head>
        <body style="margin: 0px;padding:0; height: 100vh; background-color: rgb(14, 14, 14);">
            <img src="${imageUrl}" style=" display: block; height: 100%;-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;" alt="Preview Image">
        </body>
        </html>
      `;

        // 将HTML内容写入新页面
        previewWindow.document.write(htmlContent);
    };
</script>

<style lang="scss" scoped>
    :deep() {
        .ant-card-body {
            color: var(--vp-c-text-1);
            background-color: var(--vp-c-bg);
            text-align: left;
            font-size: 14px;
        }
        .ant-timeline-item-tail {
            border-color: var(--vp-input-switch-bg-color);
        }
    }
</style>
