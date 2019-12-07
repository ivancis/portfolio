import { assert } from 'chai';
import { fixture, html } from '@open-wc/testing-helpers';
import { nextTick } from '@gig/magic-test-helpers/dist/utils';
import { AmlStatus } from '@gig/magic-sdk/dist/src/adapter/users/getAmlStatus';

describe('<magic-ui-file-upload>', () => {
    let el: null | any = null;
    let uploadBox: null | HTMLElement = null;
    let content: null | HTMLElement = null;
    let header: null | any = null;
    let files: null | HTMLElement = null;
    let action: null | HTMLElement = null;
    let status: null | HTMLElement = null;
    let fileDrop: null | HTMLElement = null;
    let fileInput: null | HTMLElement = null;
    let icon: null | HTMLElement = null;
    let uploadButton: null | HTMLButtonElement = null;
    const uploadStatus = [
        'Pending',
        'Processing',
        'NotSet',
        'Requested',
        'Rejected',
        'UserRequested',
        'Approved',
        'PendingRequest',
    ];

    describe('Normal upload', () => {
        beforeEach(async () => {
            el = await fixture(
                html`
                    <magic-ui-file-upload
                        header="Proof of ID"
                        hint='<h3>Photo ID</h3><br>For example, an ID card or passport.'
                        status="normal"
                    />
                `,
            );
            el!._wrapper.$children[0].magicConfig.mobile = true;
            uploadBox = el.shadowRoot!.querySelector('.file-upload');
            header = uploadBox!.querySelector('.header');
            content = uploadBox!.querySelector('.content');
            status = content!.querySelector('.status');
            icon = status!.querySelector('.icon');
            action = content!.querySelector('.action');
            fileDrop = content!.querySelector('.file-drop');
            fileInput = content!.querySelector('#fileInput');
            uploadButton = action!.querySelector('.button');
        });

        it('should render file upload web component', () => {
            assert.exists(header);
            assert.exists(content);
            assert.exists(uploadButton);
            assert.exists(fileDrop);
        });

        it('should render file upload web component without dropzone', async () => {
            el!._wrapper.$children[0].magicConfig.mobile = true;
            await nextTick();
            uploadBox = el.shadowRoot!.querySelector('.file-upload');
            fileDrop = content!.querySelector('.file-drop');
            assert.exists(header);
            assert.exists(content);
            assert.exists(uploadButton);
            assert.notExists(fileDrop);
        });

        it('should disable upload actions', async () => {
            el!.setAttribute('disabled', 'true');
            await nextTick();
            uploadBox = el.shadowRoot!.querySelector('.file-upload');
            action = content!.querySelector('.action');

            assert.notExists(action);
        });

        uploadStatus.forEach((upStatus) => {
            it(`should display ${upStatus} status`, async () => {
                el!.setAttribute('status', upStatus as string);
                await nextTick();

                switch (upStatus) {
                    case 'NotSet':
                    case 'Pending':
                    case 'Requested':
                    case 'UserRequested':
                    case 'PendingRequest':
                        assert.include(Array.from(status!.classList), 'status');
                        break;
                    case 'Approved':
                        assert.include(
                            Array.from(status!.classList),
                            'status--verified',
                        );
                        assert.equal(icon!.getAttribute('name'), 'checked');
                        break;
                    case 'Processing':
                        assert.include(Array.from(status!.classList), 'status');
                        assert.equal(icon!.getAttribute('name'), 'timestamp');
                        break;
                    case 'Rejected':
                        assert.include(
                            Array.from(status!.classList),
                            'status--rejected',
                        );
                        assert.equal(icon!.getAttribute('name'), 'close-solid');
                        break;
                }
            });
        });

        it('should display info icon when hint is present', async () => {
            const iconHeader = header!
                .querySelector('magic-ui-sticky-tooltip')!
                .querySelector('.wrapper')!
                .querySelector('.icon');
            const hintContent = header!
                .querySelector('magic-ui-sticky-tooltip')
                .querySelector("magic-ui-text[data-v-test-id='hint-content']");
            await nextTick();
            assert.exists(iconHeader);
            assert.equal(
                hintContent!.getAttribute('content'),
                '<h3>Photo ID</h3><br>For example, an ID card or passport.',
            );
        });

        it('should display title without info icon when hint is not present', async () => {
            el!.removeAttribute('hint');
            await nextTick();
            let tooltip: null | HTMLElement = null;
            tooltip = header!.querySelector('magic-ui-sticky-tooltip');
            const title = header!.querySelector('.title');
            assert.notExists(tooltip);
            assert.equal(title.getAttribute('content'), 'Proof of ID');
        });

        it('should display header icon when hint is present', () => {
            const iconHeader = header!
                .querySelector('magic-ui-sticky-tooltip')!
                .querySelector('.wrapper')!
                .querySelector('.icon');
            assert.exists(iconHeader);
        });

        it('should add two files', async () => {
            const file1 = new File([''], 'file1', { type: 'image/bmp' });
            const file2 = new File([''], 'file2', { type: 'image/bmp' });

            el!._wrapper.$children[0].addFile(file1);
            el!._wrapper.$children[0].addFile(file2);

            await nextTick();
            uploadBox = el.shadowRoot!.querySelector('.file-upload');
            files = content!.querySelector('.files');

            assert.equal(files!.childElementCount, 2);
        });

        it('should accept specyfied type files', async () => {
            const file3 = new File([''], 'file3', { type: 'movie' });
            const file4 = new File([''], 'file4', { type: 'image/bmp' });

            el!.addEventListener('error', (event: CustomEvent) => {
                event.stopPropagation();
            });

            el!._wrapper.$children[0].addFile(file3);
            el!._wrapper.$children[0].addFile(file4);

            await nextTick();
            uploadBox = el.shadowRoot!.querySelector('.file-upload');
            files = content!.querySelector('.files');

            assert.equal(files!.childElementCount, 1);
            assert.equal(
                fileInput!.getAttribute('accept'),
                'image/bmp,image/png,image/gif,image/jpeg,application/pdf',
            );
        });

        it('should drag and drop a file to dropzone', async () => {
            const file6 = new File([''], 'file6', { type: 'image/bmp' });
            const drop = new DragEvent('drop', {
                dataTransfer: new DataTransfer(),
            });
            drop!.dataTransfer!.items!.add(file6);

            el!.addEventListener('drop', (event: DragEvent) => {
                event.preventDefault();
            });
            el!._wrapper.$children[0].fileDropped(drop);
            await nextTick();
            files = content!.querySelector('.files');
            assert.equal(files!.childElementCount, 1);
        });
    });

    describe('With previous files', () => {
        const filesUploaded = [
            {
                kycId: 1,
                statusId: 1,
                statusText: AmlStatus.PENDING,
                statusMessage: 'Processing',
                reasonText: 'no aparent reason',
                /** ISO Date string with the upload date */
                dateUploaded: '2018-12-04T14:10:48+0000',
                helpText: 'help please',
                sowSupportDocType: null,
            },
            {
                kycId: 2,
                statusId: 2,
                statusText: AmlStatus.PENDING,
                statusMessage: 'Processing',
                reasonText: 'no aparent reason',
                /** ISO Date string with the upload date */
                dateUploaded: '2018-12-03T14:10:48+0000',
                helpText: 'help please',
                sowSupportDocType: null,
            },
        ];

        beforeEach(async () => {
            el = await fixture(
                html`
                <magic-ui-file-upload
                        .previousFiles=${filesUploaded}
                        />
                `,
            );
            await nextTick();
            uploadBox = el!.shadowRoot!.querySelector('.file-upload');
            content = uploadBox!.querySelector('.content');
        });

        it('should have the previous file on content', async () => {
            await nextTick();
            files = content!.querySelector('.files');

            assert.equal(
                files!.children[0]
                    .querySelector(
                        "magic-ui-text[data-v-test-id='uploadedDate']",
                    )!
                    .getAttribute('content'),
                '04/12/2018',
            );
            assert.equal(
                files!.children[1]
                    .querySelector(
                        "magic-ui-text[data-v-test-id='uploadedDate']",
                    )!
                    .getAttribute('content'),
                '03/12/2018',
            );
            assert.equal(files!.childElementCount, 2);
        });
    });
});
