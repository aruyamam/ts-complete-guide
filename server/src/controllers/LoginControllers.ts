import { Request, Response } from 'express';
import { get } from './decorators/routes';

@controller('/')
class LoginControllers {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
        <form method="POST">
          <div>
            <label>Email</label>
            <input name="email" />
          </div>
          <div>
            <label>Password</label>
            <input name="password" type="password" />
            <button>Submit</button>
          </div>
        </form>
      `);
  }
}
