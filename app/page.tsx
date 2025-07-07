import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { experienceData } from "@/lib/experienceData";
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
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-slate-800">細田 靖人</div>
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

      {/* トップ */}
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
                細田 靖人
              </h1>
              <p className="text-xl text-slate-600 mb-2">Webエンジニア</p>
              <div className="flex items-center justify-center text-slate-500 mb-6">
                <MapPin className="w-4 h-4 mr-2" />
                <span>東京都, 日本</span>
              </div>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed mb-8 max-w-3xl mx-auto">
              TypeScript や Python を用いた Web アプリケーション開発を中心に経験しているエンジニアです。
              Next.js や Django などのフレームワークを活用し、チーム開発とテストを大切にしています。
            </p>

            <div className="flex justify-center space-x-4">
              <Button asChild className="bg-slate-800 hover:bg-slate-700">
                <Link href="#contact">
                  <Mail className="w-4 h-4 mr-2" />
                  お問い合わせ
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://github.com/yh1110" target="_blank">
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

      {/* 職歴 */}
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
                {experienceData.map((experience) => (
                  <div
                    className="relative flex items-start"
                    key={experience.id}
                  >
                    <div
                      className={`absolute left-6 w-4 h-4  rounded-full border-4 border-white shadow-lg ${
                        experience.isLatest ? "bg-emerald-500" : "bg-slate-400"
                      }`}
                    ></div>
                    <div className="ml-20">
                      <Link href={`/detail/${experience.id}`} className="block">
                        <Card className="hover:shadow-lg  cursor-pointer hover:scale-[1.02] transition-transform">
                          <CardHeader>
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <CardTitle className="text-xl text-slate-800">
                                  {experience.position}
                                </CardTitle>
                                <CardDescription className="flex items-center text-slate-600 mt-1">
                                  <Building className="w-4 h-4 mr-2" />
                                  {experience.company}
                                </CardDescription>
                              </div>
                              <Badge
                                variant={
                                  experience.isLatest ? "secondary" : "outline"
                                }
                                className={`${
                                  experience.isLatest
                                    ? "bg-emerald-100 text-emerald-800"
                                    : ""
                                }`}
                              >
                                <Calendar className="w-3 h-3 mr-1" />
                                {experience.period}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-slate-700 mb-4">
                              {experience.description}
                            </p>
                            <div className="space-y-3">
                              <div>
                                <h4 className="font-semibold text-slate-800 mb-2">
                                  主な成果:
                                </h4>
                                <ul className="list-disc list-inside text-slate-700 space-y-1">
                                  {experience.achievements.map(
                                    (achievement, index) => (
                                      <li key={index}>{achievement}</li>
                                    )
                                  )}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold text-slate-800 mb-2">
                                  使用技術:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {experience.technologies.map(
                                    (tech, index) => (
                                      <Badge key={index} variant="outline">
                                        {tech}
                                      </Badge>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-slate-200">
                              <div className="flex items-center text-slate-600 text-sm">
                                <span>詳細を見る</span>
                                <ExternalLink className="w-4 h-4 ml-2" />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* スキル */}
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

      {/* プロジェクト例 */}
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
                      <Link href="https://github.com/yh1110" target="_blank">
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
                      <Link href="https://github.com/yh1110" target="_blank">
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
                      <Link href="https://github.com/yh1110" target="_blank">
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

      {/* 問い合わせ */}
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
                <p className="text-slate-300">hosoda@example.com</p>
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
                <Link href="mailto:hosoda@example.com">
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
              &copy; {new Date().getFullYear()} 細田 靖人. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
