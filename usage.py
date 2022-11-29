import notifications
import dash

app = dash.Dash(__name__)

app.layout = notifications.Notifications(id='component')


if __name__ == '__main__':
    app.run_server(debug=True)
