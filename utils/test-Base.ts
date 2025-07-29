import {test as baseTest, expect ,Page} from  '@playwright/test'
import { PageFixture } from '../fixtures/page-fixtures'

type fixtures ={
    pages: PageFixture;
}

export const test =baseTest.extend <fixtures> ({
    pages :async ({page},use)=> {
        await use(new PageFixture (page));
    },
});

export {expect};