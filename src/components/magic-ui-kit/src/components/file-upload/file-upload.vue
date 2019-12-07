<template>
    <magic-ui-box class="file-upload">
        <div class="header">
            <magic-ui-sticky-tooltip v-if="hint">
                <div
                    slot="clickable"
                    class="wrapper"
                >
                    <magic-ui-text
                        class="title"
                        :content="header"
                    />
                    <magic-ui-icon
                        name="info"
                        class="icon icon--header"
                    />
                </div>
                <magic-ui-text
                    slot="content"
                    data-v-test-id="hint-content"
                    :content="hint"
                />
            </magic-ui-sticky-tooltip>
            <magic-ui-text
                v-else
                class="title"
                :content="header"
            />
        </div>
        <div class="content">
            <div
                v-if="!isNormal(status)"
                class="status"
                :class="{
                    'status--verified': isVerified(status),
                    'status--pending': isPending(status),
                    'status--rejected': isFailed(status) || isRejected(status),
                }"
            >
                <magic-ui-text
                    class="text"
                    :content="$t(getStatusTranslation(status))"
                />
                <magic-ui-icon
                    class="icon icon--status"
                    :name="getStatusIcon(status)"
                />
            </div>
            <div
                v-else
                class="status"
            >
                <slot />
            </div>
            <slot
                v-if="!isVerified(status)"
                name="fixed"
            />
            <ul
                v-if="!isVerified(status) && (uploadedFiles.length > 0 || files.length > 0)"
                class="files"
            >
                <li
                    v-for="(file, i) in uploadedFiles"
                    class="file"
                    :key="`uploaded-${i}`"
                >
                    <magic-ui-text
                        class="text"
                        data-v-test-id="uploadedDate"
                        :content="file.dateUploaded | formatDate"
                    />
                    <magic-ui-icon
                        :class="[
                            'icon',
                            'icon--file',
                            getStatusIconClass(file.statusText),
                        ]"
                        :name="getStatusIcon(file.statusText)"
                    />
                </li>
                <li
                    v-for="({ file, progress, hasError }, i) in files"
                    class="file"
                    :key="`file-${i}`"
                >
                    <magic-ui-text
                        class="text"
                        :content="`${file.name} ${hasError ? '' : `(${progress}%)`}`"
                    />
                    <magic-ui-icon
                        class="icon icon--file"
                        :class="!hasError ? 'icon--file-pending': 'icon--file-rejected'"
                        :name="hasError ? 'close-solid' : 'timestamp'"
                    />
                </li>
            </ul>
            <template v-if="!isVerified(status) && !disabled">
                <div class="action">
                    <input
                        hidden
                        multiple
                        id="fileInput"
                        class="input"
                        ref="fileInput"
                        type="file"
                        :accept="supportedFileTypes.join(',')"
                        @change="fileChosen"
                    />
                    <magic-ui-button
                        v-html="$t('file-upload.button')"
                        wide
                        no-margin
                        variant="primary"
                        button-tag="label"
                        class="button"
                        for="fileInput"
                        :loading="hasPendingUpload"
                        @click="$refs.fileInput.click()"
                    />
                </div>
                <div
                    v-if="!magicConfig.mobile"
                    class="file-drop"
                    @drop.prevent="fileDropped"
                    @dragover.prevent
                    @click="$refs.fileInput.click()"
                >
                    <magic-ui-icon
                        name="upload"
                        class="icon icon--file-drop"
                    />
                    <magic-ui-text
                        class="text"
                        :content="$t('file-upload.introduction')"
                    />
                </div>
            </template>
        </div>
    </magic-ui-box>
</template>

<script lang="ts" src="./file-upload.ts" />
<style lang="scss" src="./file-upload.scss" scoped />
