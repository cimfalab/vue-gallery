<template>
    <div id="uploader">
        <div class="container">
            <form class="form-uploader" enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
                <hr>
                <div class="gallery-animation" >
                    <ul>
                        <li>It's</li>
                        <li>time</li>
                        <li>to</li>
                        <li>create</li>
                        <li>your</li>
                        <li>own</li>
                        <li>gallery</li>
                    </ul>
                </div>
                <p class="upload-info">Upload images</p>
                <div class="dropbox">
                    <input type="file" multiple :name="uploadFieldName" :disabled="isSaving"
                           @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
                           accept="image/*" class="input-file">
                    <p v-if="isInitial">
                        Drag your file(s) here to begin<br> or click to browse
                    </p>
                    <p class="uploading" v-if="isSaving">
                        Uploading {{ fileCount }} files...
                    </p>
                </div>
            </form>
            <hr>
            <div class="uploaded" v-if="isSuccess">
                <h5 class="uploaded-success"> Yupi! Your gallery has {{ uploadedFiles.length }} image(s)!</h5>
                <p class="upload-again">
                    <a href="javascript:void(0)" @click="reset()">Upload again</a>
                </p>
                <ul class="list-unstyled">
                    <li v-for="item in uploadedFiles">
                        <img :src="item.url" class="img-responsive img-thumbnail" :alt="item.originalName">
                    </li>
                </ul>
            </div>
            <div v-if="isFailed">
                <h4>Uploaded failed.</h4>
                <p>
                    <a href="javascript:void(0)" @click="reset()">Try again</a>
                </p>
                <pre>{{ uploadError }}</pre>
            </div>
        </div>
    </div>
</template>

<script>
    import {upload} from '../file-upload.fake.service';
    import {wait} from '../utils';

    const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;
    export default {
        name: 'Uploader',
        data() {
            return {
                uploadedFiles: [],
                uploadError: null,
                currentStatus: null,
                uploadFieldName: 'photos'
            }
        },
        computed: {
            isInitial() {
                return this.currentStatus === STATUS_INITIAL;
            },
            isSaving() {
                return this.currentStatus === STATUS_SAVING;
            },
            isSuccess() {
                return this.currentStatus === STATUS_SUCCESS;
            },
            isFailed() {
                return this.currentStatus === STATUS_FAILED;
            }
        },
        methods: {
            reset() {

                this.currentStatus = STATUS_INITIAL;
                this.uploadedFiles = [];
                this.uploadError = null;
            },
            save(formData) {

                this.currentStatus = STATUS_SAVING;
                upload(formData)
                    .then(wait(1000))
                    .then(x => {
                        this.uploadedFiles = [].concat(x);
                        this.currentStatus = STATUS_SUCCESS;
                    })
                    .catch(err => {
                        this.uploadError = err.response;
                        this.currentStatus = STATUS_FAILED;
                    });
            },
            filesChange(fieldName, fileList) {

                const formData = new FormData();
                if (!fileList.length) return;

                Array
                    .from(Array(fileList.length).keys())
                    .map(x => {
                        formData.append(fieldName, fileList[x], fileList[x].name);
                    });
                this.save(formData);
            }
        },
        mounted() {
            this.reset();
        },
    }
</script>

