import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Grid, Cell } from 'baseui/layout-grid';
import { Block } from 'baseui/block';

/**
 * Note: React Beautiful DND needs custom ssr configuration
 */
const DynamicTodoWithNoSSR = dynamic(() => import('../containers/TodoTabs'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>{"Demo site todo"}</title>
      </Head>
      <Block paddingTop={['0', '0', '0', '40px']}>
        <Grid gridColumns={12} gridGutters={0} gridMargins={0}>
          <Cell span={[12, 12, 3]}>
            {/* Empty cell */}
          </Cell>
          <Cell span={[12, 12, 9]}>
            <Block paddingTop={['10px', '20px', '30px', '0']}>
              <DynamicTodoWithNoSSR />
            </Block>
          </Cell>
        </Grid>
      </Block>
    </>
  )
}
