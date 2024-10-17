# Microsoft Login Page Clone for Phishing Exercises

Please be advised: This tool is intended exclusively for ethical purposes and its sole intended use is for Phishing Simulation exercises. It must not be utilized for any unethical reasons.

## Usage:


```
git clone https://github.com/AD2011/msft_login_clone_poc

cd msft_login_clone_poc

docker build -t msft_login_phish .

docker run --name msft_phish -p 5000:5000 msft_login_phish
```
## Stop and Remove Container and Image

```
docker rm -f msft_phish && docker rmi msft_login_phish:latest
```
