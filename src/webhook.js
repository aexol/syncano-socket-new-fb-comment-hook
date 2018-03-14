import serve, {response} from '@aexol/syncano-middleware';
import validate from '@aexol/syncano-middleware-validate';

function run(ctx, syncano) {
  const {
    'hub.mode': mode,
    'hub.challenge': challenge,
    'hub.verify_token': verify_token
  } = ctx.args;
  if (mode === 'subscribe') {
    if (verify_token && verify_token === ctx.config.VERIFY_TOKEN) {
      return response(challenge || '', 200, 'text/plain');
    }
  }
  syncano.event.emit('fb_comment_recieved', {payload: ctx.args});
  return response.json({});
}

export default ctx => serve(ctx, validate(run));
