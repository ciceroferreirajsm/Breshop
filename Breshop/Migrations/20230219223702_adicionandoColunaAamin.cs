using Microsoft.EntityFrameworkCore.Migrations;

namespace Breshop.Migrations
{
    public partial class adicionandoColunaAamin : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IC_ADMIN",
                table: "Usuario",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IC_ADMIN",
                table: "Usuario");
        }
    }
}
