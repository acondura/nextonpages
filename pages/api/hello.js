export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from Next API on Cloudflare Pages (Edge)!' })
}
