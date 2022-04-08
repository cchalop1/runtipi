import { Router } from 'express';
import { AppController } from '../controllers';

const router = Router();

router.route('/install').post(AppController.installApp);
router.route('/uninstall').post(AppController.uninstallApp);
router.route('/list').get(AppController.installedApps);

export default router;
