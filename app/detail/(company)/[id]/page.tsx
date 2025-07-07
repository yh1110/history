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
  ArrowLeft,
  Building,
  Calendar,
  MapPin,
  Users,
  ExternalLink,
  Target,
  Lightbulb,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getExperienceById } from "@/lib/experienceData";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ExperienceDetailPage({ params }: PageProps) {
  const { id } = await params;
  const experience = getExperienceById(Number(id));

  if (!experience) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" asChild>
              <Link href="/" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                一覧に戻る
              </Link>
            </Button>
            <div className="text-lg font-semibold text-slate-800">職歴詳細</div>
            <div></div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Company Header */}
          <div className="mb-12">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold text-slate-800 mb-2">
                  {experience.company}
                </h1>
                <p className="text-2xl text-slate-600 mb-4">
                  {experience.position}
                </p>
                <div className="flex flex-wrap gap-4 text-slate-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {experience.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {experience.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    チーム規模: {experience.teamSize}名
                  </div>
                </div>
              </div>
              {experience.website && (
                <Button variant="outline" asChild>
                  <Link href={experience.website} target="_blank">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    会社サイト
                  </Link>
                </Button>
              )}
            </div>

            <p className="text-lg text-slate-700 leading-relaxed">
              {experience.description}
            </p>
          </div>

          {/* Company Info */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="w-5 h-5 mr-2" />
                会社情報
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">業界</h4>
                  <p className="text-slate-700">
                    {experience.companyInfo.industry}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">規模</h4>
                  <p className="text-slate-700">
                    {experience.companyInfo.size}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">設立</h4>
                  <p className="text-slate-700">
                    {experience.companyInfo.founded}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-slate-800 mb-2">会社概要</h4>
                <p className="text-slate-700">
                  {experience.companyInfo.description}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Key Achievements */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2" />
                主な成果・実績
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {experience.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-700">{achievement}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Projects */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              主要プロジェクト
            </h2>
            <div className="space-y-6">
              {experience.projects.map((project, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-800">
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      <span className="text-slate-800">期間：</span>
                      {project.duration} <br />
                      <span className="text-slate-800">担当工程：</span>
                      {project.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-4">{project.description}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">
                          使用技術
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* プロジェクト詳細 */}
                      <div>
                        {/* プロジェクト概要 */}
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-2">
                            プロジェクト概要
                          </h4>
                          <p className="text-slate-700 mb-2">
                            {project.overview}
                          </p>
                        </div>

                        {/* 開発経緯 */}
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-2">
                            開発経緯
                          </h4>
                          <p className="text-slate-700 mb-2">
                            {project.developmentHistory}
                          </p>
                        </div>

                        {/* 開発課題 */}
                        {project.developmentIssue && (
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-2">
                              開発課題
                            </h4>
                            <p className="text-slate-700 mb-2">
                              {project.developmentIssue || "特になし"}
                            </p>
                          </div>
                        )}

                        {/* 対応内容 */}
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-2">
                            対応内容
                          </h4>
                          <ul className="list-disc list-inside text-slate-700">
                            {project.compatibleContentList.map(
                              (content, index) => (
                                <div key={index}>
                                  <li>{content}</li>
                                  <p className="text-slate-700 mb-2">
                                    {project.compatibleContent[index]}
                                  </p>
                                </div>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>主な業務・責任</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-3">
                {experience.responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">{responsibility}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technologies */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>使用技術・ツール</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Learnings */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="w-5 h-5 mr-2" />
                学んだこと・成長
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {experience.learnings.map((learning, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">{learning}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center pt-8">
            <Button asChild size="lg">
              <Link href="/#experience">
                <ArrowLeft className="w-4 h-4 mr-2" />
                職歴一覧に戻る
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
