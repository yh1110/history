import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Calendar,
  Building,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-slate-800">田中 太郎</div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#about"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                プロフィール
              </Link>
              <Link
                href="#experience"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                職歴
              </Link>
              <Link
                href="#skills"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                スキル
              </Link>
              <Link
                href="#projects"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                プロジェクト
              </Link>
              <Link
                href="#contact"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                お問い合わせ
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="プロフィール写真"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
              />
              <h1 className="text-5xl font-bold text-slate-800 mb-4">
                田中 太郎
              </h1>
              <p className="text-xl text-slate-600 mb-2">
                フルスタックエンジニア
              </p>
              <div className="flex items-center justify-center text-slate-500 mb-6">
                <MapPin className="w-4 h-4 mr-2" />
                <span>東京都, 日本</span>
              </div>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed mb-8 max-w-3xl mx-auto">
              5年以上のWebアプリケーション開発経験を持つフルスタックエンジニアです。
              React、Node.js、TypeScriptを中心とした現代的な技術スタックでの開発を得意とし、
              ユーザー体験を重視したプロダクト開発に情熱を注いでいます。
            </p>

            <div className="flex justify-center space-x-4">
              <Button asChild className="bg-slate-800 hover:bg-slate-700">
                <Link href="#contact">
                  <Mail className="w-4 h-4 mr-2" />
                  お問い合わせ
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://github.com" target="_blank">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
              職歴
            </h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>

              {/* Experience items */}
              <div className="space-y-12">
                {/* Current Job */}
                <div className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="ml-20">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <CardTitle className="text-xl text-slate-800">
                              シニアフルスタックエンジニア
                            </CardTitle>
                            <CardDescription className="flex items-center text-slate-600 mt-1">
                              <Building className="w-4 h-4 mr-2" />
                              株式会社テックイノベーション
                            </CardDescription>
                          </div>
                          <Badge
                            variant="secondary"
                            className="bg-emerald-100 text-emerald-800"
                          >
                            <Calendar className="w-3 h-3 mr-1" />
                            2022年4月 - 現在
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-700 mb-4">
                          SaaSプロダクトの開発チームリーダーとして、フロントエンドからバックエンドまで幅広く担当。
                          チームメンバー3名のマネジメントも行い、プロダクトの技術的な意思決定を主導。
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-2">
                              主な成果:
                            </h4>
                            <ul className="list-disc list-inside text-slate-700 space-y-1">
                              <li>
                                新機能開発により月間アクティブユーザー数を30%向上
                              </li>
                              <li>
                                パフォーマンス最適化によりページ読み込み速度を50%改善
                              </li>
                              <li>
                                CI/CDパイプラインの構築によりデプロイ時間を80%短縮
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-2">
                              使用技術:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">React</Badge>
                              <Badge variant="outline">TypeScript</Badge>
                              <Badge variant="outline">Next.js</Badge>
                              <Badge variant="outline">Node.js</Badge>
                              <Badge variant="outline">PostgreSQL</Badge>
                              <Badge variant="outline">AWS</Badge>
                              <Badge variant="outline">Docker</Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Previous Job */}
                <div className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-slate-400 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="ml-20">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <CardTitle className="text-xl text-slate-800">
                              フロントエンドエンジニア
                            </CardTitle>
                            <CardDescription className="flex items-center text-slate-600 mt-1">
                              <Building className="w-4 h-4 mr-2" />
                              株式会社ウェブソリューションズ
                            </CardDescription>
                          </div>
                          <Badge variant="outline">
                            <Calendar className="w-3 h-3 mr-1" />
                            2020年4月 - 2022年3月
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-700 mb-4">
                          Eコマースサイトの開発・運用を担当。レスポンシブデザインの実装や
                          ユーザビリティ向上のための機能開発を中心に活動。
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-2">
                              主な成果:
                            </h4>
                            <ul className="list-disc list-inside text-slate-700 space-y-1">
                              <li>モバイル対応により売上を25%向上</li>
                              <li>
                                検索機能の改善によりコンバージョン率を15%向上
                              </li>
                              <li>
                                コンポーネントライブラリの構築により開発効率を40%向上
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-2">
                              使用技術:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">React</Badge>
                              <Badge variant="outline">JavaScript</Badge>
                              <Badge variant="outline">Sass</Badge>
                              <Badge variant="outline">Webpack</Badge>
                              <Badge variant="outline">PHP</Badge>
                              <Badge variant="outline">MySQL</Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* First Job */}
                <div className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-slate-400 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="ml-20">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <CardTitle className="text-xl text-slate-800">
                              ジュニアエンジニア
                            </CardTitle>
                            <CardDescription className="flex items-center text-slate-600 mt-1">
                              <Building className="w-4 h-4 mr-2" />
                              株式会社デジタルクリエイト
                            </CardDescription>
                          </div>
                          <Badge variant="outline">
                            <Calendar className="w-3 h-3 mr-1" />
                            2019年4月 - 2020年3月
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-700 mb-4">
                          新卒として入社し、Webアプリケーションの開発に従事。
                          基礎的な技術スキルを身につけながら、小規模なプロジェクトを担当。
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-2">
                              主な業務:
                            </h4>
                            <ul className="list-disc list-inside text-slate-700 space-y-1">
                              <li>企業サイトのコーディング・保守</li>
                              <li>WordPressテーマのカスタマイズ</li>
                              <li>バグ修正・機能追加</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-2">
                              使用技術:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">HTML</Badge>
                              <Badge variant="outline">CSS</Badge>
                              <Badge variant="outline">JavaScript</Badge>
                              <Badge variant="outline">jQuery</Badge>
                              <Badge variant="outline">PHP</Badge>
                              <Badge variant="outline">WordPress</Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
              スキル
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">
                    フロントエンド
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-700">React / Next.js</span>
                        <span className="text-slate-500">上級</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-emerald-500 h-2 rounded-full"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-700">TypeScript</span>
                        <span className="text-slate-500">上級</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-emerald-500 h-2 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-700">Tailwind CSS</span>
                        <span className="text-slate-500">中級</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-yellow-500 h-2 rounded-full"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">
                    バックエンド
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-700">Node.js</span>
                        <span className="text-slate-500">上級</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-emerald-500 h-2 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-700">PostgreSQL</span>
                        <span className="text-slate-500">中級</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-yellow-500 h-2 rounded-full"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-700">AWS</span>
                        <span className="text-slate-500">中級</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-yellow-500 h-2 rounded-full"
                          style={{ width: "65%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">
                    ツール・その他
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Git</Badge>
                    <Badge>Docker</Badge>
                    <Badge>Figma</Badge>
                    <Badge>Jira</Badge>
                    <Badge>Slack</Badge>
                    <Badge>Notion</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">言語</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-700">日本語</span>
                      <span className="text-slate-500">ネイティブ</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-700">英語</span>
                      <span className="text-slate-500">
                        ビジネスレベル (TOEIC 850)
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
              プロジェクト
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="プロジェクト1"
                    width={400}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <CardTitle className="text-xl text-slate-800">
                    タスク管理アプリ
                  </CardTitle>
                  <CardDescription>
                    チーム向けのタスク管理・プロジェクト管理アプリケーション
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    リアルタイム同期機能を持つタスク管理アプリ。ドラッグ&ドロップでの直感的な操作が可能。
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">Socket.io</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href="https://github.com" target="_blank">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href="https://example.com" target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        デモ
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="プロジェクト2"
                    width={400}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <CardTitle className="text-xl text-slate-800">
                    Eコマースサイト
                  </CardTitle>
                  <CardDescription>
                    モダンなUIを持つEコマースプラットフォーム
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    決済機能、在庫管理、管理者ダッシュボードを備えた本格的なEコマースサイト。
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">Stripe</Badge>
                    <Badge variant="outline">PostgreSQL</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href="https://github.com" target="_blank">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href="https://example.com" target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        デモ
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="プロジェクト3"
                    width={400}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <CardTitle className="text-xl text-slate-800">
                    ブログプラットフォーム
                  </CardTitle>
                  <CardDescription>
                    マークダウン対応のブログ作成プラットフォーム
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    マークダウンエディター、タグ機能、コメント機能を備えたブログプラットフォーム。
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Express</Badge>
                    <Badge variant="outline">MongoDB</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href="https://github.com" target="_blank">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href="https://example.com" target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        デモ
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">お問い合わせ</h2>
            <p className="text-xl text-slate-300 mb-12">
              新しいプロジェクトやお仕事のご相談がございましたら、お気軽にご連絡ください。
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Mail className="w-8 h-8 mx-auto mb-4 text-emerald-400" />
                <h3 className="text-lg font-semibold mb-2">メール</h3>
                <p className="text-slate-300">tanaka@example.com</p>
              </div>
              <div className="text-center">
                <Phone className="w-8 h-8 mx-auto mb-4 text-emerald-400" />
                <h3 className="text-lg font-semibold mb-2">電話</h3>
                <p className="text-slate-300">090-1234-5678</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-4 text-emerald-400" />
                <h3 className="text-lg font-semibold mb-2">所在地</h3>
                <p className="text-slate-300">東京都, 日本</p>
              </div>
            </div>

            <div className="flex justify-center space-x-6">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white text-white hover:bg-white hover:text-slate-800 bg-transparent"
              >
                <Link href="mailto:tanaka@example.com">
                  <Mail className="w-5 h-5 mr-2" />
                  メールを送る
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white text-white hover:bg-white hover:text-slate-800 bg-transparent"
              >
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>
              &copy; {new Date().getFullYear()} 田中 太郎. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
