import serve, {response, cleanExit} from '@aexol/syncano-middleware';
import validate from '@aexol/syncano-middleware-validate';
import FB from 'fb';

function run(ctx, syncano) {
  const {instanceName, spaceHost} = syncano.instance.instance;
  const callbackUrl = `https://${instanceName}.${spaceHost}/${
    ctx.meta.socket
  }/webhook/?app_id=${ctx.args.app_id}&secret=${ctx.config.SECRET}`;
  const app = FB.extend({
    appId: ctx.args.app_id,
    appSecret: ctx.args.app_secret
  });
  app.setAccessToken(ctx.args.access_token);
  return new Promise((resolve, reject) => {
    app.api(
      'subscriptions',
      'post',
      {
        object: 'application',
        callback_url: callbackUrl,
        fields: 'plugin_comment',
        verify_token: ctx.config.VERIFY_TOKEN
      },
      res => {
        if (!res || res.error) {
          if (res.error) {
            console.log(res.error);
          }
          return reject({message: 'error'});
        }
        return resolve({message: 'ok'});
      }
    );
  })
    .then(d => response.json(d))
    .catch(e => response.json(e, 500));
}

export default ctx => serve(ctx, cleanExit(validate(run)));
